const pool = require('../config/database');

module.exports.saveNewNote=(req,res)=>{ 
  const qry = "insert into note (user_id, description) values (?,?)";
  var user_id = req.params.userid;
  var description = req.body.desc;
  pool.query(qry, [user_id, description], (err, result) => {
    if(err){
      res.status(403).json({message :err});  
    }
    else{
      res.status(200).json({message :"note is added succesfully"});  
    }
  });
}

module.exports.updateNote=(req,res)=>{ 
  const qry = "update note set description = ? where note_id = ?";
  var note_id = req.params.noteid;
  var description = req.body.desc;
  pool.query(qry, [description, note_id], (err, result) => {
    if(err){
      res.status(403).json({message :err});  
    }
    else if(result.affectedRows == 0) { 
      res.status(403).json({message :"No such note to update"});  
    }
    else {
      res.status(200).json({message :"note is updated succesfully"});  
    }
  });
}

module.exports.deleteNote=(req,res)=>{ 
  const qry = "delete from note where note_id = ?";
  var note_id = req.params.noteid;
  pool.query(qry, [note_id], (err, result) => {
    if(err){
      res.status(403).json({message :err});  
    }
    else if(result.affectedRows == 0) { 
      res.status(403).json({message :"No such note to delete"});  
    }
    else {
      res.status(200).json({message :"note is deleted succesfully"});  
    }
  });
}

module.exports.archiveNote=(req,res)=>{ 
  const qry = "update note set archived = true where note_id = ?";
  var note_id = req.params.noteid;
  pool.query(qry, [note_id], (err, result) => {
    if(err){
      res.status(403).json({message :err});  
    }
    else if(result.affectedRows == 0) { 
      res.status(403).json({message :"No such note to archive"});  
    }
    else {
      res.status(200).json({message :"note is archived succesfully"});  
    }
  });
}

module.exports.unarchiveNote=(req,res)=>{ 
  const qry = "update note set archived = false where note_id = ?";
  var note_id = req.params.noteid;
  pool.query(qry, [note_id], (err, result) => {
    if(err){
      res.status(403).json({message :err});  
    }
    else if(result.affectedRows == 0) { 
      res.status(403).json({message :"No such note to unarchive"});  
    }
    else {
      res.status(200).json({message :"note is unarchived succesfully"});  
    }
  });
}

module.exports.viewUnarchivedNotes=(req,res)=>{ 
  const qry = "select note_id, description from note where user_id = ? and archived = false";
  var user_id = req.params.userid;
  pool.query(qry, [user_id], (err, result) => {
    if(err){
      console.log(err);
    }
    else if(result.length == 0){
      res.status(403).json({message :"No notes for this user"});  
    }else{
      res.status(200).json({message :result});  
    }
  });
}

module.exports.viewArchivedNotes=(req,res)=>{ 
  const qry = "select note_id, description from note where user_id = ? and archived = true";
  var user_id = req.params.userid;
  pool.query(qry, [user_id], (err, result) => {
    if(err){
      console.log(err);
    }
    else if(result.length == 0){
      res.status(403).json({message :"No archived notes for this user"});  
    }else{
      res.status(200).json({message :result});  
    }
  });
}

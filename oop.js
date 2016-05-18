function NotesApplication (author){
	this.author = author;
	this.notes =  [];
    
}
	NotesApplication.prototype.create = function (note_content){
		return this.notes.push(note_content);
		
	};
	
	NotesApplication.prototype.get = function (note_id){
		var gt = this.notes[note_id];
		console.log(gt);
		
	};
	
	NotesApplication.prototype.listNotes =function (){
		for(var i=0; i<this.notes.length; i++){
			console.log("Note ID: " + i );
			console.log("Note Content: " + this.notes[i]);
			console.log("Author: " + this.author );
		}
	};

	NotesApplication.prototype.search = function(search_text) {
		var result ='';
		for (var i = 0; i < this.notes.length; i++) {
			if(this.notes[i].indexOf(search_text)){
			console.log("Showing result for search:" + " " + "Note ID: " + i + this.notes[i] + "By Author " + this.author)
			}
		return result;
	}
	};
	
	NotesApplication.prototype.delete = function(note_id) {
		delete this.notes[note_id - 1];
	};
	
	NotesApplication.prototype.edit = function(note_id, new_content){
		return this.notes[note_id]= new_content;
	};
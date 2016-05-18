<<<<<<< HEAD
function NotesApplication (author)
{
	this.author = author;
	this.notes =  notes[];
    this.create = function (note_content){
		this.notes.push(note_content);
	}

	this.listNotes =function (){
		var all_notes ='';
		for(i=0; i<this.notes.length; i++){
			all_notes= "Note ID: " + i + '\n' + this.notes[i] + '\n' + "By Author " + this.author;

		}
		return all_notes;
	}

	this.search = function(search_text) {
		result ='';
		for (var i = 0; i < this.notes.length; i++) {
			if(this.notes[i].indexOf(search_text)){
				result += "Showing result for search '" + "\n" + "Note ID: " + i + "\n" + this.notes[i] + '\n' + "By Author " + this.author + "\n";
			}
		return result;
	}
	this.delete = function(note_id) {
		delete this.notes[note_id];
	}
	this.edit = function(note_id, new_content){
		this.note[note_id]= new_content;
	}
}
=======
function NotesApplication ()
{
	var authorr = function(author){
		this.author = author;
	};

	this.notes =  notes[];
	
}

function create(note_content){
		notes.push(note_content);
		return notes[];
	}

	function listNotes(note_id,note_content,author){

	 	

		for(i=0; i<notes.length; i++){

		}

	}
>>>>>>> 8f2cbe94bc81ae542415a4a27631ea1147556d6f

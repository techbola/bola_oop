describe('Note Application OOP Spec', function () {
    var bola = new NotesApplication('bola');
    var note_id = 1;

    it('should have an author', function() {
        expect(bola.author).toBe('bola');
    });
    it('should not be empty', function() {
        expect(bola.notes.length).toBe(0);
    });
    it('should be a string', function() {
        expect(typeof bola.author).toBe(typeof "femi");
    });

     it('should return content for an id', function() {
        expect(bola.get(typeof note_id)).toBe(bola.notes[note_id]);
    });

     it('should search for a string', function() {
        
        for (var i = 0; i < bola.notes.length; i++) {
            if(bola.notes[i].indexOf(typeof 'femi')){
               var result = "Showing result for search:" + " " + "Note ID: " + i + bola.notes[i] + "By Author " + bola.author;
            }}
        expect(bola.search(typeof 'dodo')).toBe(result);
     });

     it('should delete a content', function() {
         expect(bola.delete(typeof 2)).toBe(bola.notes[typeof 2 - 1]);
     });
    
});

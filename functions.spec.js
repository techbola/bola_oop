describe('Note Application OOP Spec', function () {
	var bola = new NotesApplication('bola');
    it('Aaaaa', function() {
        expect(bola.author).toBe('bola');
    });
    it('dddd', function() {
        expect(bola.notes.length).toBe(0);
    });
    it('eeeee', function() {
        expect(bola.notes).toBeDefined();
    });
    it('A string', function() {
        expect(typeof bola.author).toBe(typeof "femi");
    });
    
});

describe('Create a note content', function () {
	var bolay = new NotesApplication('bolay');
	;
    it('created', function() {
        expect(NotesApplication.prototype.create('note_cont').notes).toContain('note_cont');
    });
    
});
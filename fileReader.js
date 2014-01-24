//http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-reading-files

var Gaffa = require('gaffa');

function FileReader(){
}
FileReader = Gaffa.createSpec(FileReader, Gaffa.Action);

FileReader.prototype.type = 'fileReader';
FileReader.prototype.trigger = function(){
    var action = this,
        reader = new FileReader();

    reader.onload = (function(file) {
        return function(event) {
            action.target.set(event.target.result);
        };
    })(f);

    reader.readAsDataURL(this.source.value);
};
FileReader.prototype.source = new Gaffa.Property();
FileReader.prototype.target = new Gaffa.Property();

module.exports = FileReader;
//http://www.html5rocks.com/en/tutorials/file/dndfiles/#toc-reading-files

var Gaffa = require('gaffa');

function FileReader(){
}
FileReader = Gaffa.createSpec(FileReader, Gaffa.Action);

FileReader.prototype.type = 'fileReader';
FileReader.prototype.trigger = function(){
    this.__super__.trigger.apply(this, arguments);

    var action = this,
        reader = new window.FileReader();

    reader.onload = function(event) {
        action.target.set(event.target.result);
    };

    reader['readAs' + (this.readAsType.value || 'Text')](this.source.value);
};
FileReader.prototype.source = new Gaffa.Property();
FileReader.prototype.target = new Gaffa.Property();
FileReader.prototype.readAsType = new Gaffa.Property();

module.exports = FileReader;
var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);
    // this.nicknames = data.nicknames;

    this.level = ko.computed(function () {
        if (this.clickCount() >= 10) {
            return 'Infant';
        }
        else {
            return 'Newborn';
        }

    }, this);
}

var ViewModel = function() {
    var self = this;

    this.cat = ko.observable(new Cat( {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames: ['Tabtab', 'Mr. T', 'T-Bone']
    }));

    this.incrementCounter = function() {
        self.cat().clickCount(self.cat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
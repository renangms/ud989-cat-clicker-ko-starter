var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');

    this.level = ko.computed(function () {
        if (this.clickCount() >= 10) {
            return 'Infant';
        }
        else {
            return 'Newborn';
        }

    }, this);

    // this.nicknames = ko.observableArray(['Tabtab', 'Mr. T', 'T-Bone']);
    this.nicknames = ['Tabtab', 'Mr. T', 'T-Bone'];
}

var ViewModel = function() {
    this.cat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.cat().clickCount(this.cat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
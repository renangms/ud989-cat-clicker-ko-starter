var cats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        nicknames: ['Tabtab', 'Mr. T', 'T-Bone']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        nicknames: ['Tigger']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        nicknames: ['Casper']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        nicknames: ['Shooby']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        nicknames: ['Zzzzz']
    }
]

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

    this.catList = ko.observableArray([]);

    cats.forEach(function (cat) {
        self.catList.push(new Cat(cat));
    });

    this.selectedCat = ko.observable(self.catList()[0]);

    this.incrementCounter = function() {
        self.selectedCat().clickCount(self.selectedCat().clickCount() + 1);
    };

    this.selectCat = function(clickedCat) {
        self.selectedCat(clickedCat);
    };
}

ko.applyBindings(new ViewModel());
class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        let name = this.listOfArticles.find(e => e.articleName == articleName);

        if (!name) {
            let model = articleModel.toLowerCase();
            this.listOfArticles.push({
                model,
                articleName,
                quantity
            });
        } else {
            name.quantity += quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(e => e.guestName == guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let newGuest = {
            guestName,
            points: 0,
            purchaseArticle: 0
        };

        if (personality == "Vip") {
            newGuest.points = 500;
        } else if (personality == "Middle") {
            newGuest.points = 250;
        } else {
            newGuest.points = 50;
        }

        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let name = this.listOfArticles.find(e => e.articleName == articleName);
        let guest = this.guests.find(e => e.guestName == guestName);
        let articlePoints = this.possibleArticles[articleModel.toLowerCase()];

        if (!name || name.model != articleModel) {
            throw new Error("This article is not found.");
        }

        if (name.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (!guest) {
            return "This guest is not invited.";
        }

        if (guest.points < articlePoints) {
            return "You need to more points to purchase the article.";
        } else if (guest.points >= articlePoints) {
            guest.points -= articlePoints;
            name.quantity--;
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${articlePoints} points.`
    }

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria == 'article') {
            result.push("Articles information:");
            this.listOfArticles.forEach(e => {
                result.push(`${e.model} - ${e.articleName} - ${e.quantity}`);
            });
        } else if (criteria == 'guest') {
            result.push("Guests information:");
            this.guests.forEach(e => {
                result.push(`${e.guestName} - ${e.purchaseArticle}`);
            });
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  incrementLikesBy(number) {
    this.numberOfLikes = this.numberOfLikes + number;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
};

var tweet1 = new Tweet("Sammy", "text","11:13PM", 30, ["too cool", "wow", "lucky!"]);
var tweet2 = new Tweet("Abby", "video and text","07:00PM", 10393343, ["love candy", "I want some!", "is it spicy?"]);
var tweet3 = new Tweet("Michelle", "video","01:00AM", 1214, ["go to sleep", "nice", "she's a scholar"]);

console.log('tweet1:', tweet1);
console.log('tweet2:', tweet2);
console.log('tweet3:', tweet3);

tweet1.addComment("not today!");
tweet1.incrementLikesBy(10);

console.log('tweet1:', tweet1);

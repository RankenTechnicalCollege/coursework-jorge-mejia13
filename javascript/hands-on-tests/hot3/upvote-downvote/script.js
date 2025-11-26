// Get the upvote and downvote buttons
const upvoteButton = document.getElementById('upvote');
const downvoteButton = document.getElementById('downvote');

let  upvoteCount = 0;
let downvoteCount = 0;
let totalCount = 0;

// Add event listener for upvote button
upvoteButton.addEventListener('click', function() { 
    let upvoteDisplay = document.getElementById('upvotes');
    upvoteDisplay.textContent = upvoteCount += 1;
    let totalDisplay = document.getElementById('totalvotes');
    totalDisplay.textContent = upvoteCount + downvoteCount;
});

// Add event listener for downvote button
downvoteButton.addEventListener('click', function() { 
    let downvoteDisplay = document.getElementById('downvotes');
    downvoteDisplay.textContent = downvoteCount += 1;
    let totalDisplay = document.getElementById('totalvotes');
    totalDisplay.textContent = upvoteCount + downvoteCount;
});


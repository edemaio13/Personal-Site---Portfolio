



// random thought text array



let textQuoteArray = [

    "&ldquo;Imagine all the people living life in peace.&rdquo; <sub>- John Lennon</sub>",
    "&ldquo;And, in the end, the love you take is equal to the love you make.&rdquo; <sub>- Paul McCartney</sub>",
    "&ldquo;You can&apos;t be afraid to experiment.&rdquo; <sub>- Geoff Emerick</sub>",
    "&ldquo;Don&apos;t compromise yourself. You are all you&apos;ve got.&rdquo; <sub>- Janis Joplin</sub>",
    "&ldquo;Imagination is more important than knowledge.&rdquo; <sub>- Albert Einstein</sub>",
    "&ldquo;There&apos;s only one requirement of any of us, and that is to be courageous.&rdquo; <sub>- David Letterman</sub>",
    "&ldquo;Nobody in life gets exactly what they thought they were going to get. But if you work really hard and you&apos;re kind, amazing things will happen.&rdquo; <sub>- Conan O&apos;Brien</sub>",
    "&ldquo;You can&rsquo;t be afraid to experiment.&rdquo; <sub>- Geoff Emerick</sub>",
    "&ldquo;I think people who truly can live a life in music are telling the world, &lsquo;You can have my love, you can have my smiles. Forget the bad parts, you don&rsquo;t need them. Just take the music, the goodness, because it&rsquo;s the very best, and it&rsquo;s the part I give most willingly.&ldquo; <sub>- George Harrison</sub>",
    "&ldquo;Life is what happens to you while you&apos;re busy making other plans.&ldquo;  <sub>- John Lennon</sub>",
    "&ldquo;All we are saying is give peace a chance.&ldquo;  <sub>- John Lennon</sub>",
    "&ldquo;Love is the answer, and you know that for sure; Love is a flower, you&apos;ve got to let it grow.&ldquo;  <sub>- John Lennon</sub>",
    "&ldquo;All the music that would ever be written is already in the universe. It&apos;s just a matter of reaching out and plucking it.&ldquo; <sub>- George Martin</sub>",
    "&ldquo;I think the producer&apos;s job is to be like a good coach, a person who says to the artist, &apos;Okay, now you&apos;re going to run the hundred meters, and I want you to do it under ten seconds.&ldquo; <sub>- George Martin</sub>",
    "&ldquo;You&apos;ve got to make every single note count, not just play lots of notes.&ldquo; <sub>-George Martin</sub>",
    "&ldquo;There are no such things as mistakes - just happy accidents.&ldquo; <sub>- George Martin</sub>",
    "&ldquo;It&apos;s very important to have the right people around you, because there are always going to be more difficult times than there are good times.&ldquo; <sub>- George Martin</sub>",
    "&ldquo;You are what you settle for.&ldquo; <sub>- Janis Joplin</sub>",
    "&ldquo;Music is the language of feeling and of passion.&ldquo; <sub>- David Gilmour</sub>",
    "&ldquo;Try not to become a person of success, but rather try to become a person of value.&ldquo; <sub>- Albert Einstein</sub>",
    "&ldquo;You can&apos;t wait for inspiration, you have to go after it with a club.&ldquo; <sub>- David Letterman</sub>",
    "&ldquo;Be the change you wish to see in the world.&ldquo; <sub>- Mahatma Gandhi</sub>",
    "&ldquo;Success is not final, failure is not fatal: it is the courage to continue that counts.&ldquo; <sub>- Winston Churchill</sub>",
    "&ldquo;The only way to do great work is to love what you do.&ldquo; <sub>- Steve Jobs</sub>",
    "&ldquo;The best way to find yourself is to lose yourself in the service of others.&ldquo; <sub>- Mahatma Gandhi</sub>",
    "&ldquo;Believe you can and you&apos;re halfway there.&ldquo; <sub>- Theodore Roosevelt</sub>",
    "&ldquo;I have not failed. I&apos;ve just found 10,000 ways that won&apos;t work.&ldquo; <sub>- Thomas Edison</sub>",
    "&ldquo;In the end, we will remember not the words of our enemies, but the silence of our friends.&ldquo; <sub>- Martin Luther King Jr.</sub>",
    "&ldquo;The future belongs to those who believe in the beauty of their dreams.&ldquo; <sub>- Eleanor Roosevelt</sub>",
    "&ldquo;The greatest glory in living lies not in never falling, but in rising every time we fall.&ldquo; <sub>- Nelson Mandela</sub>",
    "&ldquo;We must be the change we wish to see in the world.&ldquo; <sub>- Mahatma Gandhi</sub>",
    "&ldquo;Music is the universal language of mankind.&ldquo; <sub>- Henry Wadsworth Longfellow</sub>",
    "&ldquo;Music is a higher revelation than all wisdom and philosophy.&ldquo; <sub>- Ludwig van Beethoven</sub>",
    "&ldquo;Without music, life would be a mistake.&ldquo; <sub>- Friedrich Nietzsche</sub>",
    "&ldquo;Music is the soundtrack of your life.&ldquo; <sub>- Dick Clark</sub>",
    "&ldquo;Music is the art which is most nigh to tears and memories.&ldquo; <sub>- Oscar Wilde</sub>",
    "&ldquo;Where words fail, music speaks.&ldquo; <sub>- Hans Christian Andersen</sub>",
    "&ldquo;Music is the poetry of the air.&ldquo; <sub>- Jean Paul Richter</sub>",
    "&ldquo;Music is the divine way to tell beautiful, poetic things to the heart.&ldquo; <sub>- Pablo Casals</sub>",
    "&ldquo;So shines a good deed in a weary world&ldquo; <sub>- Willy Wonka</sub>",
    "&ldquo;You make me want to be a better man.&ldquo; <sub>- Jack Nicholson in &apos;As Good As It Gets&apos;</sub>",
    "&ldquo;Life moves pretty fast. If you don&apos;t stop and look around once in a while, you could miss it.&ldquo; <sub>- Matthew Broderick in &apos;Ferris Bueller&apos;s Day Off&apos;</sub>",




        

    
  ];

// get the random quote

let randomQuote = document.getElementById("random-quote");
randomQuote.innerHTML = textQuoteArray[0];
    

// function that displays random quote

function displayRandomQuote() {
    
    // create random index number
        let randomQuoteIndex = Math.floor(Math.random() * textQuoteArray.length);
    // get random element from the array
    let randomQuoteText = textQuoteArray[randomQuoteIndex];

    // update p with the random quote

    randomQuote.innerHTML = randomQuoteText;

}

window.addEventListener("load", displayRandomQuote);
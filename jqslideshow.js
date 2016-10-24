/**
 * Created by jaWeber on 10/22/16.
 */

$(document).ready(function() {
    "use strict";

    var image, imageCache = [];
    $("#slides img").each(function() {
        image = new Image();
        image.src = $(this).attr("src");
        imageCache.push(image);
    });

    var titleCache = ["Pink Clematis", "Purple Ball Flower", "Japanese Iris", "Mums", "Blue/Purple Flower", "Mini, Pink Flowers",
        "More Mini, Pink FLowers", "Still More Mini, Pink Flowers","Day Lily", "Sunset", "Ringed Sun"];
    var captions = ["A beautiful climbing perenial flower, six inches across - growing along the wall below our deck.",
        "A perenial plant that blooms early in the spring with heights reaching 5 ft!  In the bed directly in back of our house.",
        "A perenial plant with huge blossoms six inches across that bloooms in early spring.  We have a 3 square foot clump of these " +
        "in our rear bed away from the house.",
        "A fall favorite.  These are inside on the kitchen table.  Taken on an August evening 2016.",
        "A perenial that blooms mid-summer with samller blooms 1.5-2 inches across. These are in the bed directly in back of our house.",
        "An annual - not sure what it is - some kind of mini-wave-petunia, I think. These are in several of our deck containers",
        "An annual - another type of wave-petunia, I think.  Also in several of our deck containers and hanging baskets.",
        "An annual - not sure what it is - and really don't have a good guess. These are in our hanging baskets and deck containers.",
        "A perenial plant that blooms in early summer with heights ranging from 3-4 feet.  These are along the walk near out front door.",
        "A beautiful August evening (2016) from our driveway looking west (duh!).",
        "I was perched on my towel at Crystal Lake Main Beach several years ago and looked up.  So pretty I tried to capture it!"];
    var counter = 0;
    var nextImage, nextTitle, nextCaption;

    var runSlideShow = function() {
        $("#slideTitle").hide(500);
        $("#caption").hide(500);
        $("#main_image").hide(500,
            function() {
                counter = (counter + 1) % imageCache.length;
                nextImage = imageCache[counter];
                nextTitle = titleCache[counter];
                nextCaption = captions[counter];
                $("#slideTitle").text(nextTitle).show(500);
                $("#main_image").css("width","350px");
                $("#main_image").attr("src", nextImage.src).show(500);
                /*$("#main_image").animate({height: '300px'}, "fast");*/
                $("#main_image").animate({width: '250px'}, "slow");

                /*$("#main_image").attr("src", nextImage.src).fadeIn(1000);*/
                $("#caption").text(nextCaption).show(500);
            }
        );
    };

    var timer = setInterval(runSlideShow,4000);

   $("#main_image").click(function() {
       if (timer != null) {
           clearInterval(timer);
           timer=null;
       } else {
           timer = setInterval(runSlideShow, 4000);
       }
   });

});
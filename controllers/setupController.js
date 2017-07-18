/* This controller is to add seed data to the database and any other init required for development. */
/* It is restricted to run only on the dev environment */
var mongoose = require("mongoose");

var Introduction = require("../models/introductionModel");
var Music = require("../models/musicModel");
var Transcription = require("../models/transcriptionModel");
var Biography = require("../models/biographyModel");

// For now this is dummy data. Later it will have the actual initial data for the site

var seedData = {
    introduction: {
        title: "Alfredo Balcacer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum blandit risus non posuere",
        introductionPicUrl: "/images/introductionpic.jpg"
    },
    music: {
        videoUrl: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
        musicPlaylist: [
            {
                songName: "Something Special",
                artist: "Alfredo Balcacer",
                songUrl: "/music/its-taking-too-long.mp3"
            },
            {
                songName: "No More Love For Women",
                artist: "Alfredo Balcacer",
                songUrl: "/music/un-jardin-en-el-espacio.mp3"
            },
            {
                songName: "Tales of the Horseback Rider",
                artist: "Alfredo Balcacer",
                songUrl: "/music/tales-of-the-horseback-rider.mp3"
            },
            {
                songName: "Track One Wav",
                artist: "Alfredo Balcacer",
                songUrl: "/music/track-one.wav"
            }
        ]
    },
    transcription: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel risus hendrerit, dapibus dolor at, placerat arcu. Nullam ut\n" +
        "mauris ac augue ultrices sollicitudin quis sed neque. Proin feugiat vehicula volutpat",
        transcriptions: [
            {
                title: "Transcription #1 Title",
                videoUrl: "/videos/gagatojazz.mp4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nulla ut odio commodo suscipit. Curabitur vel convallis quam, et dapibus sem. Curabitur nec molestie odio. Donec nulla sapien, venenatis ut nisl sed, gravida semper ipsum. Fusce rhoncus purus nisl, ut interdum nisi lacinia at. Quisque ut enim massa. Aenean vel vulputate orci, et iaculis turpis. Aenean tincidunt, lectus eu malesuada scelerisque, turpis eros bibendum tellus, nec placerat lorem lacus non risus. Suspendisse sit amet.",
                pdfUrl: "/pdfs/gagatojazz.pdf"
            },
            {
                title: "Transcription #2 Title",
                videoUrl: "/videos/palotoblues.mp4",
                description: "Cras odio quam, scelerisque et finibus et, viverra ut magna. Nullam a justo sit amet est sagittis tincidunt nec ullamcorper ante. Pellentesque eget egestas arcu, ut commodo mauris. Nulla facilisi. Phasellus aliquet ligula in ligula tempor porta. Duis sed dignissim enim. Aliquam sodales, sapien vel accumsan porttitor, mauris ex dapibus dui, a rutrum diam lacus sit amet mauris. Vestibulum mattis rhoncus aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis orci urna, et.",
                pdfUrl: "/pdfs/palotoblues.pdf"
            }
        ]
    },
    biography: {
        biographyText: "Alfredo Balcacer (b. March 11, 1984) is a guitarist and educator from the Dominican Republic. He graduated with a degree in\n" +
        "Music Performance from Utah State University, and is currently finishing his masters degree in Music Performance at Western\n" +
        "Michigan University. After coming to the United States, he has studied privately with Corey and Mike Christiansen, Fareed\n" +
        "Haque, Tom Knific, Pat Martino, Bryan Baker, Fred Hamilton, Ed Simon, among others. Alfredo has performed in USA, Brazil,\n" +
        "Canada and the Dominican Republic, and taught guitar privately for 8 years back home. Besides being a former member of the\n" +
        "award-winning groups such a Gold Company, USU Jazz Orchestra, WMU Jazz Orchestra, Mas Que Nada, Alfredo is also a recipient\n" +
        "of scholarships by the Dominican Republic Government, Utah State Caine College of the Arts and WMU Department of\n" +
        "Music.\n" +
        "For the past 10 years, Alfredo has performed and collaborated with many artists such as Peter Erskine, Randy Brecker, Corey\n" +
        "Christiansen, George Garzone, Peter Eldridge, Cedric Dent, Jeremy Siskind, Deborah Brown, among others. As attendee to\n" +
        "many masterclasses, he has performed with John Scofield, Chico Pinheiro, Julian Lage, Peter Bernstein, and Philip Catherine. In\n" +
        "the Dominican Republic, he shared stage and recorded with Los Hermanos Rosario, Vakero, Javier Vargas, Cuquito Moré,\n" +
        "Otoniel Nicolas, Guy Frometa, Juan Francisco Ordóñez, Josean Jacobo, Esar Simo, Los Rayo Solares, Diego Mena, El Metro, and\n" +
        "many, many others.",
        picUrl: "/images/bio-main.jpg",
        gear: [
            {
                gearType: "Guitars",
                items: [
                    {
                        name: "Carvin HF2 (Allan Holdsworth Signature\n" +
                        "Model)"
                    },
                    {
                        name: "Ibanez Artist 1978"
                    },
                    {
                        name: "Fender Telecaster Custom (w/Joe"
                    }
                ]
            },
            {
                gearType: "Amps",
                items: [
                    {
                        name: "Tech 21 Trademark 60"
                    },
                    {
                        name: "Hot Rod Deluxe w/mod."
                    }
                ]
            },
            {
                gearType: "Pedals, effects and accessories",
                items: [
                    {
                        name: "Line 6 Helix LT"
                    },
                    {
                        name: "Xotic RC Booster"
                    },
                    {
                        name: "Ernie Ball Volume Pedal"
                    },
                    {
                        name: "EWS Subtle Volume Pedal"
                    }
                ]
            },
            {
                gearType: "Strings / Pick",
                items: [
                    {
                        name: "On Carvin HF2 (Thomastick, strings): 0.11, 0.14, 0.16, 0.28, 0.37, 0.48"
                    },
                    {
                        name: "On Fender Telecaster:\n" +
                        "D’addario stock set of 11’s\n" +
                        "Dunlop Gator H3 picks"
                    }
                ]
            }
        ]
    }

};

// I guess you need to put a file manually for things requiring files. Maybe there's a way to automate this as well, but
// for now we'll just seed the path to mongo and render the file that was put manually in public from there.

module.exports = function(app) {

    var logResult = function(err, result) {
        if(err) throw err;

        console.log(result);
    };

    app.get("/api/appSetup", function(req, res) {
        /* Add seed data */
        Introduction.create(seedData.introduction, logResult);
        Music.create(seedData.music, logResult);
        Transcription.create(seedData.transcription, logResult);
        Biography.create(seedData.biography, logResult);

        res.send("App Data Seeded Successfully");

    });
};
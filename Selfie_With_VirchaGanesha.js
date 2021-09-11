noseX = "";
noseY = "";
objects = [];
function preload()
{
    clown_nose = loadImage("morning pooja 1.png");
}
function setup()
{
    canvas = createCanvas(740, 480);
    canvas.parent('parent');
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x= " + noseX);
        console.log("nose y= " + noseY);
        objects = results;
    }
}
function modelLoaded()
{
    console.log("Model Is Loaded");
}
function draw()
{
    background("gold")
    image(clown_nose, -30, 40, 100, 100);
    image(video, 300, 80, 360, 370);
    fill("green");
    stroke("black");
    text("ॐ गं गणपतये नम:", 240, 60);
    textSize(30);
}
function take_snapshot()
{
    save('#VirchaGanesha.png');
}
function backSelfie()
{
    window.location = "index.html";
}
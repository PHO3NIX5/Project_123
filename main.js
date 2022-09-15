leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,100);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotResults);
}

function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Will Be = "+difference+"px";
    textSize(difference);
    fill("black");
    text('PH03NIX5',50,400);
}

function modeloaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let mouse_events = "";
let color = "red";
let radius = 20;
let width = 1;

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", () => {
    mouse_events = "mouseup";
    console.log("Mouse up");
});
canvas.addEventListener("mouseleave", () => {
    mouse_events = "mouseleave";
    console.log("mouse leave");
});

canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e){
    color = document.getElementById("color_input").value;
    radius = document.getElementById("radius_input").value;
    width = document.getElementById("width_input").value;
    mouse_events = "mousedown";
}

function my_mousemove(e){
    console.log("MouseMoev happedned");
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouse_events == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
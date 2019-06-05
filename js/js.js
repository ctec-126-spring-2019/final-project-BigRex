
$("#canvas").outerHeight($(window).height() - $("#canvas").offset().top - Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
$(window).on("resize", function () {
    $("#canvas").outerHeight($(window).height() - $("#canvas").offset().top - Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
});

// Image from Array:  http://jsfiddle.net/m1erickson/956kC/
//Image inside canvas:  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_canvas_get
// var canvas = document.createElement("canvas");

function myFunction() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //ctx.fillStyle = "#FF0000";
    //ctx.fillRect(20, 20, 150, 100);
    //}
    //var ctx = canvas.getContext("2d");

    // size the canvas to your desired image
    canvas.width = 40;
    canvas.height = 30;

    // get the imageData and pixel array from the canvas
    var imgData = ctx.getImageData(0, 0, 40, 30);
    var data = imgData.data;
    console.log(data);

    // manipulate some pixel elements
    for (var i = 0; i < data.length; i += 4) {
        data[i] = 255; // set every red pixel element to 255
        data[i + 3] = 255; // make this pixel opaque
    }

    // put the modified pixels back on the canvas
    ctx.putImageData(imgData, 0, 0);

    // create a new img object
    var image = new Image();

    // set the img.src to the canvas data url
    image.src = canvas.toDataURL();
}



// function pic1()
//         {
//             document.getElementById("img").src = "img/Figure_3-1.svg";
//         }
//         function pic2()
//         {
//             document.getElementById("img").src ="picture 2 source";


// From:  https://codepen.io/caisq/pen/maEVNm

// async function run() {
// Simplest case: Line chart with only one series.
//     let values = [{ x: 1, y: 20 }, { x: 2, y: 30 }, { x: 3, y: 5 }, { x: 4, y: 12 }];
//     tfvis.render.linechart({ values }, document.getElementById('plot1'), {
//         width: 400
//  });
// }
//     run();


class="show-script" > {
    const classNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    function doPrediction(testDataSize = 500) {
    const testData = data.nextTestBatch(testDataSize);
    const testxs = testData.xs.reshape([testDataSize, 28, 28, 1]);
    const labels = testData.labels.argMax([-1]);
    const preds = model.predict(testxs).argMax([-1]);
    testxs.dispose();
    return [preds, labels];
}

async function showAccuracy() {
    const [preds, labels] = doPrediction();
    const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
    const container = {
        name: 'Accuracy',
        tab: 'Evaluation'
    };
    tfvis.show.perClassAccuracy(container, classAccuracy, classNames);
    labels.dispose();
}

async function showConfusion() {
    const [preds, labels] = doPrediction();
    const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
    const container = {
        name: 'Confusion Matrix',
        tab: 'Evaluation'
    };
    tfvis.render.confusionMatrix(container, {
        values: confusionMatrix,
        tickLabels: classNames
    });
    labels.dispose();
}

document.querySelector('#show-accuracy').addEventListener('click', () => showAccuracy());
document.querySelector('#show-confusion').addEventListener('click', () => showConfusion());
}
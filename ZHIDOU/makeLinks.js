
function waitload() {

    var mydata = data;

    let container = document.getElementById("linkContainer");

    for (let i = 0; i < data.length; i++) {

        var a = document.createElement('a');
        var linkText = document.createTextNode(data[i]);

        a.appendChild(linkText);

        a.title = data[i];

        a.href = data[i];

        container.append(a);

    }
}


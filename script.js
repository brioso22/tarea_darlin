function handleClickBox1() {
    alert('Has hecho clic en la primera caja');
}

function handleMouseOverBox1() {
    document.getElementById('box1').style.backgroundColor = 'lightcoral';
}

function handleMouseOutBox1() {
    document.getElementById('box1').style.backgroundColor = 'lightblue';
}

function handleFocusBox1() {
    document.getElementById('box1').style.border = '2px solid red';
}

function handleBlurBox1() {
    document.getElementById('box1').style.border = 'none';
}

function handleClickBox2() {
    alert('¡Alerta personalizada para la segunda caja!\nHaz hecho clic en la segunda caja');
}

function handleMouseOverBox2() {
    document.getElementById('box2').style.backgroundColor = 'lightgreen';
}

function handleMouseOutBox2() {
    document.getElementById('box2').style.backgroundColor = 'lightblue';
}

function handleFocusBox2() {
    document.getElementById('box2').style.border = '2px solid green';
}

function handleBlurBox2() {
    document.getElementById('box2').style.border = 'none';
}

function handleClickBox3() {
    const box3 = document.getElementById('box3');
    box3.style.display = 'none';
}

function handleMouseOverBox3() {
    document.getElementById('box3').style.backgroundColor = 'lightpink';
}

function handleMouseOutBox3() {
    document.getElementById('box3').style.backgroundColor = 'lightblue';
}

function handleFocusBox3() {
    document.getElementById('box3').style.border = '2px solid pink';
}

function handleBlurBox3() {
    document.getElementById('box3').style.border = 'none';
}
document.getElementById('box1').addEventListener('click', handleClickBox1);
document.getElementById('box1').addEventListener('mouseover', handleMouseOverBox1);
document.getElementById('box1').addEventListener('mouseout', handleMouseOutBox1);
document.getElementById('box1').addEventListener('focus', handleFocusBox1);
document.getElementById('box1').addEventListener('blur', handleBlurBox1);

document.getElementById('box2').addEventListener('click', handleClickBox2);
document.getElementById('box2').addEventListener('mouseover', handleMouseOverBox2);
document.getElementById('box2').addEventListener('mouseout', handleMouseOutBox2);
document.getElementById('box2').addEventListener('focus', handleFocusBox2);
document.getElementById('box2').addEventListener('blur', handleBlurBox2);

document.getElementById('box3').addEventListener('click', handleClickBox3);
document.getElementById('box3').addEventListener('mouseover', handleMouseOverBox3);
document.getElementById('box3').addEventListener('mouseout', handleMouseOutBox3);
document.getElementById('box3').addEventListener('focus', handleFocusBox3);
document.getElementById('box3').addEventListener('blur', handleBlurBox3);


document.getElementById('box4').addEventListener('focus', function() {
    document.getElementById('input1').addEventListener('input', function() {
        this.value = this.value.toUpperCase(); 
    });
});

document.getElementById('box5').addEventListener('focus', function() {
    document.getElementById('input2').addEventListener('input', function() {
        this.value = this.value.toLowerCase(); 
    });
});

document.getElementById('box6').addEventListener('focus', function() {
    document.getElementById('input3').addEventListener('input', function() {
        this.style.color = 'red'; 
    });
});



document.getElementById('box7').addEventListener('mouseover', () => {
    document.getElementById('box7').style.backgroundColor = 'lightgreen'; 
});

document.getElementById('box8').addEventListener('mouseover', () => {
    document.getElementById('box8').style.transform = 'scale(0.8)'; 
});

document.getElementById('box9').addEventListener('mouseover', () => {
    document.getElementById('box9').style.opacity = '0.5'; 
});

document.getElementById('box3').addEventListener('click', handleClickBox3);
document.getElementById('box3').addEventListener('mouseover', handleMouseOverBox3);
document.getElementById('box3').addEventListener('mouseout', handleMouseOutBox3);
document.getElementById('box3').addEventListener('focus', handleFocusBox3);
document.getElementById('box3').addEventListener('focus', handleBlurBox3);

// Definir funciones y eventos para los nuevos elementos
const box4 = document.getElementById('box4');
const input1 = document.getElementById('input1');

const box5 = document.getElementById('box5');
const input2 = document.getElementById('input2');

const box6 = document.getElementById('box6');
const input3 = document.getElementById('input3');

// Event listeners para el cambio de estilos y texto de los inputs
input1.addEventListener('focus', function () {
    box4.innerText = "convierte el texto en minuscula";
});

input2.addEventListener('focus', function () {

    box5.innerText = "CONVIERTE EL TEXTO A MAYUSCULA";

});

input3.addEventListener('focus', function () {
  box6.style.color = 'red'
});


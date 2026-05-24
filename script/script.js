document.getElementById('btnCifrar').addEventListener('click', () => {
    const palabra = document.getElementById('palabraInput').value;
    if (!palabra) return;
    
    let resultado = "";
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < palabra.length; i++) {
        let siguienteFib = a + b;
        a = b;
        b = siguienteFib;
        
        while (true) {
            let esPrimo = true;
            if (siguienteFib <= 1) {
                esPrimo = false;
            } else {
                for (let j = 2; j * j <= siguienteFib; j++) {
                    if (siguienteFib % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
            }
            
            if (esPrimo) break;
            
            let temp = a + b;
            a = b;
            b = temp;
            siguienteFib = temp;
        }
        
        let asciiValue = palabra.charCodeAt(i);
        
        if (asciiValue >= 32 && asciiValue <= 126) {
            let n = asciiValue - 32;
            let cifrado = (n + siguienteFib) % 95;
            resultado += String.fromCharCode(cifrado + 32);
        } else {
            resultado += palabra.charAt(i);
        }
    }
    
    document.getElementById('resultadoCifrado').innerText = resultado;
});

document.getElementById('btnDescifrar').addEventListener('click', () => {
    const palabraCifrada = document.getElementById('codigoInput').value;
    if (!palabraCifrada) return;
    
    let resultado = "";
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < palabraCifrada.length; i++) {
        let siguienteFib = a + b;
        a = b;
        b = siguienteFib;
        
        while (true) {
            let esPrimo = true;
            if (siguienteFib <= 1) {
                esPrimo = false;
            } else {
                for (let j = 2; j * j <= siguienteFib; j++) {
                    if (siguienteFib % j === 0) {
                        esPrimo = false;
                        break;
                    }
                }
            }
            
            if (esPrimo) break;
            
            let temp = a + b;
            a = b;
            b = temp;
            siguienteFib = temp;
        }
        
        let asciiValue = palabraCifrada.charCodeAt(i);
        
        if (asciiValue >= 32 && asciiValue <= 126) {
            let c = asciiValue - 32;
            let descifrado = (c - (siguienteFib % 95) + 95) % 95;
            resultado += String.fromCharCode(descifrado + 32);
        } else {
            resultado += palabraCifrada.charAt(i);
        }
    }
    
    document.getElementById('resultadoDescifrado').innerText = resultado;
});
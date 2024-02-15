const generateButton = document.getElementById('btnGenerate');
const inputText = document.getElementById('inputText');
const checkboxLetter = document.getElementById('checkbox1');
const checkboxNumber = document.getElementById('chechbox2');
const checkboxSymbol = document.getElementById('checkbox3');
const checkbox6 = document.getElementById('radio6');
const checkbox8 = document.getElementById('radio8');
const checkbox10 = document.getElementById('radio10');
const checkbox12 = document.getElementById('radio12');
const botonCopy = document.getElementById('btnCopy');
const popupModal = document.getElementById('popupModal');
const colorNaraja = document.getElementById("barra1");
const colorAmarillo= document.getElementById("barra2");
const colorVerde = document.getElementById("barra3");


    generateButton.addEventListener('click', function () {
    const password = generatePassword(
        checkboxLetter.checked,
        checkboxNumber.checked,
        checkboxSymbol.checked,
        checkbox6.checked,
        checkbox8.checked,
        checkbox10.checked,
        checkbox12.checked,
        
    );

    //show the password in the input.
    inputText.value = password;

    });


    // change the lines if the checkbox is not select.
    checkboxLetter.addEventListener('change', handleCheckboxChange);
    checkboxNumber.addEventListener('change', handleCheckboxChange);
    checkboxSymbol.addEventListener('change', handleCheckboxChange); 


    
    botonCopy.addEventListener('click', function () {
        
        try{
        inputText.select();
        inputText.setSelectionRange(0, 99999); // Para dispositivos móviles


      //see modal in display block
      popupModal.style.display = 'block';

      //time out for popup -> remove popupModal in 2 sec.
      setTimeout(() => {
          closePopupModal();
      }, 2000);}
      catch(err){
        alert('Error copying to clipboard. Please try again manually.');
      }
    });

    // remove modal function
    function closePopupModal() {
        popupModal.style.display = 'none';
    }


   
        
    //FUNCTION
    function generatePassword(allowLetters, allowNumbers, allowSymbols,size6,size8,size10,size12) {
    
        
    // Create length = Size
    let length;
    if(size6) length = 6;
    else if(size8) length = 8;
    else if(size10) length = 10;
    else if(size12) length = 12;
    
    if(length === null){
        alert('Choice the size');
    }
        
    // Add Letters, Numbers  and Symbols  = Valores
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?/{}[]';
            
    // Variables Create
    let password = '';
    let validChars = '';
            
    // Checkbox Select. Password contain the checkbox/es value select.
    if (allowLetters) validChars += letters;
    if (allowNumbers) validChars += numbers;
    if (allowSymbols) validChars += symbols;

        // if The checkboxes are not select -> open an Alert
        if (validChars == null || validChars === '') {
        alert('Please select at least one option (Letter, Number, or Symbol).');
        return '';
        }

    //math Floor > 7,8  >> 7 
    //Math Random > return ramdom number > 0 or 8
    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex); 
    }



    handleCheckboxChange();

    return password;

    }
        

        // Password lines.
        function handleCheckboxChange() {
         
            const checkboxesSeleccionados = [checkboxLetter, checkboxNumber, checkboxSymbol].filter(checkbox => checkbox.checked).length;
    
            // depends the length, you can see each line.
            colorNaraja.style.display = checkboxesSeleccionados >= 1 ? 'block' : 'none';
            colorAmarillo.style.display = checkboxesSeleccionados >= 2 ? 'block' : 'none';
            colorVerde.style.display = checkboxesSeleccionados >= 3 ? 'block' : 'none';
        }

    

        
$(function(){
    var table = [
      "H",
      "He",
      "Li",
      "Be",
      "B",
      "C",
      "N",
      "O",
      "F", 
      "Ne", 
      "Na",
      "Mg",
      "Al",
      "Si",
      "P",
      "S",
      "Cl",
      "Ar",
      "K",
      "Ca",
      "Sc",
      "Ti",
      "V",
      "Cr",
      "Mn",
      "Fe",
      "Co",
      "Ni",
      "Cu",
      "Zn",
      "Ga",
      "Ge",
      "As",
      "Se",
      "Br",
      "Kr",
      "Rb", 
      "Sr", 
      "Y",
      "Zr",
      "Nb",
      "Mo", 
      "Tc", 
      "Ru", 
      "Rh",
      "Pd",
      "Ag",
      "Cd",
      "In",
      "Sn",
      "Sb",
      "Te",
      "I",
      "Xe",
      "Cs",
      "Ba",
      "La",
      "Ce",
      "Pr",
      "Nd",
      "Pm",
      "Sm", 
      "Eu",
      "Gd", 
      "Tb", 
      "Dy", 
      "Ho",
      "Er",
      "Tm",
      "Yb",
      "Lu",
      "Hf",
      "Ta", 
      "W",
      "Re",
      "Os",
      "Ir",
      "Pt", 
      "Au",
      "Hg",
      "Tl", 
      "Pb",
      "Bi",
      "Po",
      "At", 
      "Rn", 
      "Fr",
      "Ra",
      "Ac",
      "Th",
      "Pa",
      "U",
      "Np",
      "Pu",
      "Am",
      "Cm",
      "Bk",
      "Cf",
      "Es",
      "Fm",
      "Md",
      "No",
      "Lr",
      "Rf",
      "Db",
      "Sg",
      "Bh",
      "Hs",
      "Mt",
      "Ds",
      "Rg",
      "Cn",
      "Uut",
      "Fl",
      "Uup",
      "Lv",
      "Uus",
      "Uuo"
    ];

    var acido = [];
    var base = [];
    
    
    $('button').click(function(){
        var inputAcid = $('#acido').val();
        var reazione = '';
        
        for(var i = 0; i < inputAcid.length; i++) {
            if(inputAcid[i] == inputAcid[i].toUpperCase() && inputAcid[i + 1] == inputAcid[i + 1].toLowerCase())
            {
                acido.push(inputAcid[i] + inputAcid[i + 1]);
            }

            else if( inputAcid[i] == inputAcid[i].toUpperCase())
            {
                acido.push(inputAcid[i]);
            }
        }
      
        console.log(acido);

    });

});
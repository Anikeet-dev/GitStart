
//Get Element By Id. -->
// let headerTitle = document.getElementById('main-header');

// headerTitle.style.borderBottom = 'solid 4px black';

// Get Element By ClassName. -->

// let cardItems = document.getElementsByClassName('title');
// console.log('cardItems');

// for (let i = 0; i < cardItems.length; i++) {
//     if (cardItems[i].textContent === 'Add Items') {
//       cardItems[i].style.fontWeight = 'bold';
//       cardItems[i].style.color = 'green';
//     }
//   }

//   let items = document.getElementsByClassName('list-group-item');
//   items[1].style.backgroundColor = 'green';

//   for(let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
//   }

  //Get Element By TagName. -->
  // let li = document.getElementsByTagName('li');
  // console.group('li');
  // for (let i = 0; i < li.length; i++) {
  //     if (li[i].textContent === 'Add Items') {
  //       li[i].style.fontWeight = 'bold';
  //       li[i].style.color = 'green';
  //     }
  //   }
  
  //   li[1].style.backgroundColor = 'green';
  
  //   for(let i = 0; i < li.length; i++){
  //     li[i].style.fontWeight = 'bold';
  //   }

    //QuerySelector. -->
    let title = document.querySelector('title');
    console.log('title');

    let item = document.querySelectorAll('li');
    item[1].style.color = 'green'; 
    item[2].style.visibility = 'hidden';

    let odd = document.querySelectorAll('li:nth-child(odd)');
    for(let i = 0; i < odd.length; i++){
      odd[i].style.backgroundColor = 'green';
    }
    


  

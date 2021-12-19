import { Meteor } from 'meteor/meteor';
import { Person_Collection } from '../imports/api/phonebook';
import { LinksCollection } from '/imports/api/links';
import {Type_of_phone_Collection,
  Street_Collection,
  Address_Collection,
  PhoneNumber_Collection
} from '/imports/api/phonebook';

// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }

function insertTypePhone({name}){
  Type_of_phone_Collection.insert({name});
}

function insertStreet({name}){
  Street_Collection.insert({name})
}

function insertAddress({idStreet,home,appartment}){
  Address_Collection.insert({idStreet,home,appartment});
}

function insertPhoneNumber({idType,number}){
  PhoneNumber_Collection.insert({idType,number});
}

function insertPerson({idAddress,lastname,firstname,fathername}){
  Person_Collection.insert({idAddress,lastname,firstname,fathername});
}


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  // if (LinksCollection.find().count() === 0) {
  //   insertLink({
  //     title: 'Do the Tutorial',
  //     url: 'https://www.meteor.com/tutorials/react/creating-an-app'
  //   });

  //   insertLink({
  //     title: 'Follow the Guide',
  //     url: 'http://guide.meteor.com'
  //   });

  //   insertLink({
  //     title: 'Read the Docs',
  //     url: 'https://docs.meteor.com'
  //   });

  //   insertLink({
  //     title: 'Discussions',
  //     url: 'https://forums.meteor.com'
  //   });

  // }

  if (Type_of_phone_Collection.find().count() === 0){
    insertTypePhone({
      name:'mobile'
    });
    insertTypePhone({
      name:'work'
    });
    insertTypePhone({
      name:'home'
    });
  }
  
});

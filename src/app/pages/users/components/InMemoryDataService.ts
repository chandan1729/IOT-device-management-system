export class InMemoryDataService {
  createDb() {
    const users = [
      { userid: 11, usercategory: 'Student', firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', contact: '123456' },
      
    ];
    return { users };
  }
}   
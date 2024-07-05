// Node class  
class Node {  
    constructor(data) {  
      this.data = data;  
      this.next = null;  
    }  
  }  
    
  // LinkedList class  
  class LinkedList {  
    constructor() {  
      this.head = null;  
    }  
    
    addNode(data) {  
      const node = new Node(data);  
      if (!this.head) {  
        this.head = node;  
      } else {  
        let current = this.head;  
        while (current.next) {  
          current = current.next;  
        }  
        current.next = node;  
      }  
    }  
    
    traverse() {  
      let current = this.head;  
      while (current) {  
        console.log(current.data);  
        current = current.next;  
      }  
    }  
  }  
    
  // TreeNode class  
  class TreeNode {  
    constructor(data) {  
      this.data = data;  
      this.left = null;  
      this.right = null;  
    }  
  }  
    
  // Bank class  
  class Bank {  
    constructor() {  
      this.accounts = new LinkedList();  
    }  
    
    createAccount(accountNumber, accountHolder, balance) {  
      const account = {  
        accountNumber,  
        accountHolder,  
        balance  
      };  
      this.accounts.addNode(account);  
    }  
    
    deposit(accountNumber, amount) {  
      let current = this.accounts.head;  
      while (current) {  
        if (current.data.accountNumber === accountNumber) {  
          current.data.balance += amount;  
          console.log(`Deposit successful. New balance: ${current.data.balance}`);  
          return;  
        }  
        current = current.next;  
      }  
      console.log("Account not found");  
    }  
    
    withdraw(accountNumber, amount) {  
      let current = this.accounts.head;  
      while (current) {  
        if (current.data.accountNumber === accountNumber) {  
          if (current.data.balance >= amount) {  
            current.data.balance -= amount;  
            console.log(`Withdrawal successful. New balance: ${current.data.balance}`);  
            return;  
          } else {  
            console.log("Insufficient balance");  
            return;  
          }  
        }  
        current = current.next;  
      }  
      console.log("Account not found");  
    }  
    
    getBalance(accountNumber) {  
      let current = this.accounts.head;  
      while (current) {  
        if (current.data.accountNumber === accountNumber) {  
          console.log(`Balance: ${current.data.balance}`);  
          return;  
        }  
        current = current.next;  
      }  
      console.log("Account not found");  
    }  
  }  
    
  // Create a new banking system  
  const bankingSystem = new Bank();  
    
  // Create accounts  
  bankingSystem.createAccount(1, "John Doe", 1000);  
  bankingSystem.createAccount(2, "Jane Doe", 500);  
  bankingSystem.createAccount(3, "Bob Smith", 2000);  
    
  // Deposit and withdraw money  
  bankingSystem.deposit(1, 500);  
  bankingSystem.withdraw(2, 200);  
  bankingSystem.getBalance(3);  
    
  // Traverse accounts  
  bankingSystem.accounts.traverse();  
  
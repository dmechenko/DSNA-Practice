<?php

class Customer{
  //declaring attributes
  //public available everywhere
  //private available nowhere
  //protected available if another class extends it
  private $id;
  private $name;
  private $email;
  private $balance;

  public function __construct($id, $name, $email, $balance){
    $this->id
    $this->name
    $this->email
    $this->balance
    echo "The constructor ran..."
  }

  public function getCustomer($id){
    $this->id = $id
    return "John Doe";
  }

  public function __destruct(){
    echo "Destructor ran..."
  }

  public function getEmail(){
    return $this->email;
  }
}

$customer = new Customer(1, 'Dan', 'dan@gmail.com', 50);

echo $customer->getEmail();

class Subscriber extends Customer {
  public $plan
  public function __construct($id, $name, $email, $balance){
    parent::__construct($id, $name, $email, $balance)
  }
  public function getEmail(){
    return $this->email;
  }
}

?>
function formSubmit()
{
    var errors = '';
    var MyOutput = 'Thank your!';
    var totalIncome = 0;
    var tax = 0;
    var IncomeTaxesPaidOutput= 0;
    var totalIncomeTax = 0;
    var IncomeTaxesPayable = 0;
    
    //get the name 
    var Name        = document.getElementById('name').value; 
    if (Name == "" || Name == null) 
    {
      errors += 'Please input your Name ! <br>'
  
    }
    // get the number 
    var PhoneNumber      = document.getElementById('phone').value;
    if (PhoneNumber  == "" || PhoneNumber  == null) 
    {
      errors += 'Please input your Phone Number! <br>'
      
    }
    //check the number 
    var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/ ;
    if (!phoneRegex.test(PhoneNumber))
    {
     errors += 'Please input a valid phone number in the format 012 345 6789 <br>';
     
    }
    //get the email 
    var Email       = document.getElementById('email').value;
    if (Email   == "" || Email   == null) 
    {
      errors += 'Please input your Email  ! <br>'
      
    }
    //check the emil 
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(Email ))
    {
     errors += 'Please input a valid email! <br>';
    
    }

    var EmploymentIncome  = document.getElementById('income').value;
    if(EmploymentIncome!= "")
    {
     if(isNaN(EmploymentIncome) || EmploymentIncome < 0  )
        {
         errors += 'Invalid information! Please enter The Employment Income<br>';
       
        }
        EmploymentIncome = parseInt(EmploymentIncome);
    }
    else 
    {
        errors += ' Employment Income can not be empty <br>';
        
    }
    
    var otherIncome   = document.getElementById('otherIncome').value;
    
    if(otherIncome != "" )
    {
        if(isNaN(otherIncome) || otherIncome < 0)
        {
         errors += 'Invalid  information!  <br>';
        
        }

        otherIncome = parseInt(otherIncome);
    }

    var incomeTaxesPaid   = document.getElementById('IncomeTaxPaid').value;
    
    if(incomeTaxesPaid == "" )
    {
        errors += 'Income Taxes Paid can not be empty <br>';

    }
    else
    {
        if(isNaN(incomeTaxesPaid) || incomeTaxesPaid < 0  )
        {
         errors += 'Invalid  information! Please enter The Income Taxes Paid  <br>';
        
        }
        
        incomeTaxesPaid = parseInt(incomeTaxesPaid);
        

    }
    
    document.getElementById('errorsMsg').innerHTML = errors;

    if(errors == "")
    {

        totalIncome = EmploymentIncome + otherIncome;

        if(totalIncome < 60.000)
        {
            tax = 0.20; 
        }
        else if  (totalIncome > 60.000 && totalIncome < 90.000 )
        {
            tax = 0.25;
        }
        else if  ( totalIncome > 90.000 )
        {
            tax = 0.34;
        }

        totalIncomeTax = totalIncome * tax;
        IncomeTaxesPayable =  totalIncome - incomeTaxesPaid;
        


        MyOutput = `
        Name                :${Name}<br>
        Phone               :${PhoneNumber}<br>
        Email               :${Email}<br>
        Total Income        :$${totalIncome}.000<br>
        Total Income Tax    :$${totalIncomeTax}00<br>
        Income Taxes Paid   :$${incomeTaxesPaid }.000<br>
        
        `;
        document.getElementById('OutputId').innerHTML = MyOutput;
    }
    else
    {
        document.getElementById('errorsMsg').innerHTML = errors;
        document.getElementById('OutputId').innerHTML = '';
    }

    return false;
}
# Lab 8 - Starter

Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Within a Github action that runs whenever code is pushed 
Manually run them locally before pushing code
Run them all after all development is completed
   - A: Within a Github action that runs whenever code is pushed. Because Github action allows us to test our code after each push, it will be easier and more effcient to put the tests within a github action.

Would you use an end to end test to check if a function is returning the correct output? (yes/no)
    - No. It will be more reasonable to use unit testing as we would like to test output of some functions instead of a large program.


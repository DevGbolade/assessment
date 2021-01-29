# Validation Api

Live API Endpoint is here! [here](https://frozen-waters-52353.herokuapp.com/)

## Built With

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)

## Supporting packages
#### Linter
* [ESLint](https://eslint.org/)

#### Compiler
* [Babel](https://babeljs.io/)

## Application Features
* Show my info
* Validate Rule

## Getting Started
### Installation
* Install [NodeJS](https://nodejs.org/) on your computer
* Clone this repository using `https://github.com/rozay10/assessment.git`
* Use the `.env.example` file to setup your environmental variables and rename the file to `.env`
* Run `npm install` to install all dependencies
* Run `npm run build` to build the project
* Run `npm run start:dev` to start the server
* Navigate to [localhost:3000](http://localhost:4500/) in browser to access the application

**Using Postman**

-   **URL**
    -   /
-   **Method**
    -   `GET`
-   **Success Response**
    -   **Code:** 200
    -   **Content:**

If you have Postman installed, you can test routes listed below. An example response spec would be:
```bash
# on successful request to the home route "/"
    {
        message: "User data retrieved successfully.",
        status: "success",
        data: {
            name: [string],
            mobile: [string],
            github: [string],
            email: [string]
        }
    }
```
-   **Failure Response**
    -   **Code:** 500
    -   **Content:**

```bash
# on errored request to the sign in route "/"
{
        message: "Internal server error occurred.",
        status: "error",
        data: null
}
```


## API endpoints

| Method   |                    Endpoint                     |                Description                 |        Access         |
| :------- | :---------------------------------------------: | :----------------------------------------: | :-------------------: |
| `POST`   |              `/`              |       Get User Data      |        User        |
| `POST`   |              `/validate-rule`              |           Validates data object based on given rules           | User |


### **Validate Rule**
-   **URL**
    -   /validate-rule
-   **Method**
    -   `POST`
-   **Data Params**
    -   **Required**
        -   `rule={field: [string], condition:[string], condition_value: [string | number]}`
        -   `data=[string | array | object]`
-   **Success Response**
    -   **Code:** 200
    -   **Content:**
    ```
    {
        message: "field [name of field] successfully validated.",
        status: "success",
        data: {
            validation: {
                error: false,
                field: [name of field],
                field_value: [value of field],
                condition: [rule condition],
                condition_value: [condition value]
            }
        }
    }
    ```
-   **Failure Response**
    -   **Code:** 400
    -   **Content:**
    ```
    {
        message: "[field] is required.",
        status: "error",
        data: null
    }
    ```
    **OR**
    -   **Code:** 400
    -   **Content:**
    ```
    {
        message: "[field] should be a/an [type].",
        status: "error",
        data: null
    }
    ```
    **OR**
    -   **Code:** 400
    -   **Content:**
    ```
    {
    message: "field [name of field] is missing from data.",
    status: "error",
    data: null
    }
    ```
    **OR**
    -   **Code:** 400
    -   **Content:**
    ```
    {
        message: "field [name of field] failed validation.",
        status: "error",
        data: {
            validation: {
                error: true,
                field: [name of field],
                field_value: [value of field],
                condition: [rule condition],
                condition_value: [condition value]
            }
        }
    }
    ```
    **OR**
    -   **Code:** 500
    -   **Content:**
    ```
    {
        message: "Internal server error occurred.",
        status: "error",
        data: null
    }
    ```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Author

 **Agbolade Adeniyi**

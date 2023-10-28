# 🥫 SMI-LATINHAS-LLC

This API was created for SMI-Latinhas-LLC project, in this document you will to learn how to run the API and his end-points.

# Configuration

1. Enter into the folder `/back` in bash
2. Type `npm i`
3. Create a `.env` file with this informations:
```env
PORT=4000
```
4. Run the API with `npm run start:dev`
5. Server will be listening on `http://localhost:4000`

# 📁 Demand End-points
### GET /demand
This request returns all demands presents in database.

### Response: 200
```json
[
    {
        "id": 1,
        "description": "Teste",
        "sku": "324235",
        "totalPlan": "23425",
        "status": "OPEN",
        "createdAt": "2023-10-28T18:47:30.000Z"
    },
    {
        "id": 2,
        "description": "Teste",
        "sku": "324235",
        "totalPlan": "23425",
        "status": "OPEN",
        "createdAt": "2023-10-28T18:50:21.000Z"
    },
    {
        "id": 3,
        "description": "Teste",
        "sku": "324235",
        "totalPlan": "23425",
        "status": "OPEN",
        "createdAt": "2023-10-28T18:50:33.000Z"
    },
    {
        "id": 4,
        "description": "Teste",
        "sku": "324235",
        "totalPlan": "23425",
        "status": "OPEN",
        "createdAt": "2023-10-28T18:50:35.000Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
### POST /demand
This request creates a new demand.

### Body (**raw**)
```json
{
    "description": "Teste",
    "sku": "324235",
    "totalPlan": "23425",
    "status": "OPEN"
}
```

### Response: 201
```json
{
    "description": "Teste",
    "sku": "324235",
    "totalPlan": "23425",
    "status": "OPEN",
    "id": 1,
    "createdAt": "2023-10-28T18:47:30.000Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
### PATCH /demand/:id
This requests update the body of an object already created, so you need to pass his `id` to find this object and pass the property that you want to modify in body, follow this example below:

### Body (**raw**)

```json
{
  "status": "CLOSED"
}
```

### Response: 200
```json
{
    "generatedMaps": [],
    "raw": [],
    "affected": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
### DELETE /demand/:id
This request delete a demand by id passed in params, follow the example below:

### Response: 200
```json
{
    "raw": [],
    "affected": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

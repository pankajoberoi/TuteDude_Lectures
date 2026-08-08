const http = require("http");
const { uptime } = require("process");
const url = require("url");

let server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;
  const splittedPath = path.split("/");

  //   if (req.method === "GET" && splittedPath[1] === "products") {
  //     const products = [
  //       { id: 1, name: "Laptop" },
  //       { id: 2, name: "Mobile" },
  //     ];
  //     if (splittedPath[2]) {
  //       let flag = false;
  //       for (let i = 0; i < products.length; i++) {
  //         if (splittedPath[2] == products[i].id) {
  //           flag = true;
  //           res.writeHead(200, {
  //             "content-type": "application/json",
  //           });
  //           res.end(
  //             JSON.stringify({
  //               message: `${splittedPath[2]} id fetched successfully`,
  //               product: `${products[i].name} is your product`,
  //             }),
  //           );
  //           return;
  //         }
  //       }
  //       if (flag == false) {
  //         res.writeHead(404, {
  //           "content-type": "application/json",
  //         });
  //         res.end(
  //           JSON.stringify({
  //             message: "Product not found in our list",
  //           }),
  //         );
  //       }
  //     } else {
  //       res.writeHead(200, {
  //         "content-type": "application/json",
  //       });
  //       res.end(JSON.stringify(products));
  //     }
  //   }

  if (req.method === "GET" && path === "/products") {
    const products = [
      { id: 1, name: "Laptop", category: "EL", brand: "HP" },
      { id: 2, name: "Burger", category: "Food", brand: "MCD" },
      { id: 3, name: "Mobile", category: "EL", brand: "apple" },
      { id: 4, name: "Pizza", category: "Food", brand: "Dominoz" },
    ];

    if (query.category === "EL") {
      let data = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].category == query.category) {
          data.push(products[i].name);
        }
      }
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify(data));
    } else if (query.category === "Food") {
      let data = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].category == query.category) {
          data.push(products[i].name);
        }
      }
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify(data));
    }
  }
});

server.listen(8080, () => {
  console.log("Server running at port 8080");
});

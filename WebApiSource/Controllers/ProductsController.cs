using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiGetStarted.Models;

namespace WebApiGetStarted.Controllers
{
    public class ProductsController : ApiController
    {
        //private WebApiGetStartedContext db = new WebApiGetStartedContext();
        static List<Product> products = new List<Product>()
        {
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
        };

        public IHttpActionResult GetAllProducts()
        {
            return Ok(products);
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        [HttpPost]
        public IHttpActionResult PostProduct([FromBody] Product product)
        {
            //Product product = null;// JsonConvert.DeserializeObject<Product>(s);
             
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
                
            }
            products.Add(product);
            return Ok();
        }

        [HttpPut]
        public IHttpActionResult UpdateProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            Product productData = products.Where(x => x.Id == product.Id).FirstOrDefault();
            productData.Category = product.Category;
            productData.Name = product.Name;
            productData.Price = product.Price;
            return Ok(products);
        }
        //// GET: api/Products
        //public IQueryable<Product> GetProducts()
        //{
        //    return db.Products;
        //}

        //// GET: api/Products/5
        //[ResponseType(typeof(Product))]
        //public IHttpActionResult GetProduct(int id)
        //{
        //    Product product = db.Products.Find(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(product);
        //}

        //// PUT: api/Products/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PutProduct(int id, Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != product.Id)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(product).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/Products
        //[ResponseType(typeof(Product))]
        //public IHttpActionResult PostProduct(Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.Products.Add(product);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        //}

        //// DELETE: api/Products/5
        //[ResponseType(typeof(Product))]
        //public IHttpActionResult DeleteProduct(int id)
        //{
        //    Product product = db.Products.Find(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    db.Products.Remove(product);
        //    db.SaveChanges();

        //    return Ok(product);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool ProductExists(int id)
        //{
        //    return db.Products.Count(e => e.Id == id) > 0;
        //}
    }
}
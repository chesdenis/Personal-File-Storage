﻿using PFS.Server.EntityFramework.OData.Context;
using PFS.Server.EntityFramework.OData.Mock;
using PFS.Server.EntityFramework.OData.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PFS.Server.EntityFramework.OData.Repository
{
    public class PhotoRepository : IRepository<Photo>  
    {
        MsSqlContext _context = new MsSqlContext();

        public List<Photo> GetAll()
        {
           return _context.Photos.ToList();
        }

        public Photo Get(int id)
        {
            return _context.Photos.FirstOrDefault(p => p.Id == id);
        }

        public bool Save(Photo entity)
        {
            _context.Photos.Add(entity);
            _context.SaveChanges();

            return true;
        }

        public string Update(int id, Photo entity)
        {
            throw new NotImplementedException();
        }

        public string Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
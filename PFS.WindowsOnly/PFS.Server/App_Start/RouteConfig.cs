﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace PFS.Server.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            object homeController = new { controller = "Home", action = "Index", id = UrlParameter.Optional };


            //routes.MapRoute("home", "{}", homeController);
            routes.MapRoute(name: "Video", url: "video", defaults: homeController);
            routes.MapRoute(name: "Audio", url: "audio", defaults: homeController);

            routes.MapRoute("Default", "{controller}/{action}/{id}", homeController);
        }
    }
}
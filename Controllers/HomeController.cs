using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HarbourControlModels;

namespace HarbourControl_Shiv.Controllers
{
    
    public class HomeController : Controller
    {
        public readonly log4net.ILog exceptionLogger = log4net.LogManager.GetLogger("ExceptionLoggger");  //Declaring Log4Net 
        public ActionResult Index()
        {
            //Summary
            //Initialized the List Object for Boat Model
            List<BoatModel> list = new List<BoatModel>();
            try
            {
                //Declared an Arrayto type String for specifying and declaring the different boat types
                string[] boatType = { "Speed Boat", "Cargo Boat", "Sail Boat" };

                //Declared an Array of type Integer for specifying and declaring the different boat speeds
                int[] boatSpeed = { 30, 15, 5 };

                //Declared a variable randomId for Dynamic random Number of Boats to be generated
                int randomId = new Random().Next(3, 5);

                //Declared a variable of type Integer i.e. randomBoatType 
                //for Dynamic random type of Boats to be generated
                int randomBoatType /*= new Random().Next(0, 2)*/;

                //Declared For Loop for creating thhe Boat Object that will be iterated based
                //On te value of randomId
                for (int i = 0; i < randomId; i++)
                {
                    BoatModel boatObject = new BoatModel();
                    randomBoatType = new Random().Next(0, 2);
                    boatObject.Type = boatType[randomBoatType];
                    boatObject.Speed = boatSpeed[randomBoatType];
                    list.Add(boatObject);
                }
            }
            catch (Exception ex)
            {
                exceptionLogger.Error("Exception Message:- " + ex.Message
                    + Environment.NewLine +
                    "Inner Exception Message:- " + ex.InnerException
                    + Environment.NewLine
                    + "Stack Trace:- " + ex.StackTrace
                    + Environment.NewLine
                    +"Exception Source:- " + ex.Source);
            }
            return View(list);
        }
    }
}
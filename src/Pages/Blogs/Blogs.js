import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className=" container text-center">
      <h2>Blogs</h2>
      <div className="text-start">
        <div className="mb-5">
          <h4>
            <strong>Q.:</strong> Difference between javascript and nodejs?
          </h4>
          <p>
            <strong>Ans.:</strong>
            <br />
            <strong>Javascript:</strong> Javascript is a lightweight,
            object-oriented scripting language that is used to build dynamic
            HTML pages with interactive effects on a webpage. JavaScript is also
            commonly used in game development and mobile app development. It is
            an interpreted scripting language, and the code can only be executed
            and run in a web browser.
            <br />* It is an open-source, flexible, fast, light-weighted
            framework. <br />* It allows cross-compilation. <br />* It supports
            interfaces, modules, and classes. <br />* It is used for both
            frontend and backend development so that it may run on different
            devices.
          </p>
          <p>
            <strong>NodeJs:</strong> Node.js is a cross-platform, open-source
            JavaScript runtime environment that enables JavaScript to be run on
            the server. Node.js enables JavaScript code to run outside of the
            browser. Node.js comes with a large number of modules and is mostly
            used in web creation.
            <br /> * it is an MIT-licensed open-source framework. <br /> * It is
            a lightweight framework that includes minimum modules. Other modules
            may be included as per the requirement of an application.
            <br />
            * It's a cross-platform framework that works on Windows, MAC, and
            Linux.
            <br />* It is used the JavaScript language to develop server-side
            applications.
          </p>
          <hr />
        </div>
        <div className="mb-5">
          <h4>
            <strong>Q.:</strong> When should you use nodejs and when should you
            use mongodb?
          </h4>
          <p>
            <strong>Ans.:</strong> <br />
            <strong>Use nodejs:</strong> Node. js is primarily used for
            non-blocking, event-driven servers, due to its single-threaded
            nature. It's used for traditional web sites and back-end API
            services, but was designed with real-time, push-based architectures
            in mind.
          </p>
          <p>
            <strong>Use mongodb:</strong> MongoDB is an open-source document
            database built on a horizontal scale-out architecture that uses a
            flexible schema for storing data. MongoDB has always devoted
            abundant time and energy to making sure developers have a great
            experience. <br />- The document data model is a powerful way to
            store and retrieve data.
            <br />- MongoDB is available in any major public cloud (such as AWS,
            Azure, and Google Cloud) through MongoDB Atlas, in large data.{" "}
            <br />- MongoDB has a great user experience for developers who can
            install MongoDB and start writing code immediately. <br />-
            MongoDB’s horizontal, scale-out architecture can support huge
            volumes of both data and traffic.
          </p>
          <hr />
        </div>
        <div className="mb-5">
          <h4>
            {" "}
            <strong>Q.:</strong> Differences between sql and nosql databases?
          </h4>
          <p>
            {" "}
            <strong>Ans.: </strong>
            <br />
            <strong>SQL:</strong> Structured Query language (SQL) pronounced as
            “S-Q-L” or sometimes as “See-Quel” is the standard language for
            dealing with Relational Databases.
            <br />
            <br />- SQL databases are primarily called RDBMS or Relational
            Databases. <br />- Structured query language (SQL). <br />- SQL
            databases are table based databases. <br />- Oracle, Postgres, and
            MS-SQL.
          </p>

          <p>
            <strong>NoSQL:</strong> NoSQL is a non-relational DMS, that does not
            require a fixed schema, avoids joins, and is easy to scale. NoSQL
            database is used for distributed data stores with humongous data
            storage needs. <br />
            <br />- NoSQL databases are primarily called as Non-relational or
            distributed database. <br />- No declarative query language. <br />-
            NoSQL databases can be document based, key-value pairs, graph
            databases. <br />- MongoDB, Redis, Neo4j, Cassandra, Hbase.
          </p>
          <hr />
        </div>
        <div className="mb-5">
          <h4>What is the purpose of jwt and how does it work?</h4>
          <p>
            <strong>Purpose of JWT:</strong> JWTs are a good way of securely
            transmitting information between parties because they can be signed,
            which means you can be sure that the senders are who they say they
            are. Additionally, the structure of a JWT allows you to verify that
            the content hasn't been tampered with.
          </p>
          <p>
            <strong>Work JWT:</strong> Encrypting a JWT for a given recipient
            requires their public RSA key. The decryption takes place with the
            corresponding private RSA key, which the recipient must keep secret
            at all times.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

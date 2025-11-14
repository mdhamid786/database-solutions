// ✅ MongoDB Architecture Overview (Interview Ready)

// In interviews, you should explain MongoDB architecture in three layers:
// 1️⃣ MongoDB Architecture — High-Level Overview
// MongoDB architecture is built on:
// A. Document-Based Storage (BSON)
// MongoDB stores data as documents (similar to JSON).
// These documents are grouped into collections.
// Collections are inside databases.

// Hierarchy:
// Database → Collections → Documents → Fields
// B. MongoDB Server Components
// MongoDB architecture has three main components:

// 1. mongod (Primary Database Server)
// This is the main database server.
// Handles:
// Data storage
// CRUD operations
// Indexing
// Replication
// Sharding
// In short: mongod = heart of MongoDB.

// 2. mongos (Query Router for Sharded Cluster)
// Used when sharding (horizontal scaling).
// Distributes client requests across the cluster.
// Makes scaling smooth.
// In short: mongos = traffic manager.

// 3. MongoDB Shell / Driver
// Allows applications to interact with MongoDB.
// Node.js interacts through the MongoDB driver or Mongoose.
// Example:
// mongoose.connect("mongodb://localhost:27017/myDB");

// 2️⃣ MongoDB Replication (High Availability)
// Replication provides data redundancy and fault tolerance.
// A Replica Set contains:
// Primary Node → handles reads/writes
// Secondary Node(s) → copy data from primary
// Arbiter (optional) → breaks tie during elections

// ✔ Why Replication is Important?
// Failover support
// Backup of data
// High availability
// Interview Example
// “If the primary node fails, MongoDB automatically elects a new primary node from the secondary nodes.”

// 3️⃣ MongoDB Sharding (Horizontal Scaling)
// Sharding helps when databases become too large or too slow.
// How it works:
// Data is split across multiple servers (shards).
// mongos routes queries.
// A config server stores cluster metadata.
// Key Terms:
// Shard
// Mongos router
// Config servers
// Why Sharding?
// Large datasets
// High throughput applications
// Geo-distributed apps

// 4️⃣ MongoDB Indexing (Performance Boost)
// Indexes work like an index in a book → faster searching.
// Types:
// Single field index
// Compound index
// Text index
// TTL index
// Geospatial index
// Why indexing?
// Faster reads
// Optimized queries
// Reduced CPU usage

// 5️⃣ MongoDB Storage Engine
// MongoDB mainly uses:
// WiredTiger Engine
// Default storage engine
// Supports compression
// Multi-document ACID transactions
// Checkpointing
// Write-ahead logging
-- Greek Mythology Database Schema for Vercel Postgres (Neon)
-- Run this to create all tables

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS creatures CASCADE;
DROP TABLE IF EXISTS myths CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS heroes CASCADE;
DROP TABLE IF EXISTS gods CASCADE;

-- ============================================
-- GODS TABLE
-- ============================================
CREATE TABLE gods (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  greek_name TEXT NOT NULL,
  roman_name TEXT NOT NULL,
  title TEXT NOT NULL,
  domain TEXT[] NOT NULL,
  symbols TEXT[] NOT NULL,
  parentage JSONB NOT NULL DEFAULT '{}',
  residence TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- HEROES TABLE
-- ============================================
CREATE TABLE heroes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  parentage JSONB NOT NULL,
  famous_for TEXT[] NOT NULL,
  weapons TEXT[] NOT NULL,
  companions TEXT[] NOT NULL,
  fate TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LOCATIONS TABLE
-- ============================================
CREATE TABLE locations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('mountain', 'underworld', 'city', 'island', 'temple', 'realm')),
  region TEXT,
  significance TEXT NOT NULL,
  associated_deities TEXT[] NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- MYTHS TABLE
-- ============================================
CREATE TABLE myths (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('creation', 'heroic', 'divine', 'tragedy', 'war', 'love')),
  characters TEXT[] NOT NULL,
  locations TEXT[] NOT NULL,
  summary TEXT NOT NULL,
  moral_lesson TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CREATURES TABLE
-- ============================================
CREATE TABLE creatures (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  abilities TEXT[] NOT NULL,
  weakness TEXT,
  famous_encounters TEXT[] NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES for better query performance
-- ============================================

-- Gods indexes
CREATE INDEX idx_gods_name ON gods(name);
CREATE INDEX idx_gods_domain ON gods USING GIN(domain);

-- Heroes indexes
CREATE INDEX idx_heroes_name ON heroes(name);

-- Locations indexes
CREATE INDEX idx_locations_name ON locations(name);
CREATE INDEX idx_locations_type ON locations(type);

-- Myths indexes
CREATE INDEX idx_myths_title ON myths(title);
CREATE INDEX idx_myths_category ON myths(category);
CREATE INDEX idx_myths_characters ON myths USING GIN(characters);

-- Creatures indexes
CREATE INDEX idx_creatures_name ON creatures(name);
CREATE INDEX idx_creatures_type ON creatures(type);

-- ============================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for all tables
CREATE TRIGGER update_gods_updated_at BEFORE UPDATE ON gods
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_heroes_updated_at BEFORE UPDATE ON heroes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_locations_updated_at BEFORE UPDATE ON locations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_myths_updated_at BEFORE UPDATE ON myths
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_creatures_updated_at BEFORE UPDATE ON creatures
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

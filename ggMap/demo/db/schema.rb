# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180104034420) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "iso_code"
    t.geometry "geom", limit: {:srid=>4326, :type=>"multi_polygon"}
    t.index ["geom"], name: "index_countries_on_geom", using: :gist
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.point "latlon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "provinces", force: :cascade do |t|
    t.string "name"
    t.geometry "geom", limit: {:srid=>4326, :type=>"multi_polygon"}
  end

end

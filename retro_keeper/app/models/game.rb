class Game
  attr_reader :id, :title, :developer, :publisher, :platform, :genre, :region, :condition, :image, :rarity, :qty, :worth, :description, :release_date

  if(ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user,uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "retro_keeper")
  end

  def initialize(opts = {})
    @id = opts["id"].to_i
    @title = opts["title"]
    @developer = opts["developer"]
    @publisher = opts["publisher"]
    @platform = opts["platform"]
    @genre = opts["genre"]
    @region = opts["region"]
    @condition = opts["condition"]
    @image = opts["image"]
    @rarity = opts["rarity"]
    @qty = opts["qty"].to_i
    @worth = opts["worth"].to_i
    @description = opts["description"]
    @release_date = opts["release_date"]
  end

  def self.all
    results = DB.exec("SELECT * FROM games;")
    return results.map {|result| Game.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM games WHERE id=#{id};")
    return Game.new(results.first)
  end

  def self.create(opts={})
    results = DB.exec(
      <<-SQL
        INSERT INTO
          games (
            title,
            developer,
            publisher,
            platform,
            genre,
            region,
            condition,
            image,
            rarity,
            qty,
            worth,
            description,
            release_date
          )
        VALUES (
          '#{opts["title"]}',
          '#{opts["developer"]}',
          '#{opts["publisher"]}',
          '#{opts["platform"]}',
          '#{opts["genre"]}',
          '#{opts["region"]}',
          '#{opts["condition"]}',
          '#{opts["image"]}',
          '#{opts["rarity"]}',
          #{opts["qty"]},
          #{opts["worth"]},
          '#{opts["description"]}',
          '#{opts["release_date"]}'
        )
        RETURNING
          id,
          title,
          developer,
          publisher,
          platform,
          genre,
          region,
          condition,
          image,
          rarity,
          qty,
          worth,
          description,
          release_date;
      SQL
    )
    return Game.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM games WHERE id=#{id};")
    return { deleted: true }
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE
          games
        SET
          title='#{opts["title"]}',
          developer='#{opts["developer"]}',
          publisher='#{opts["publisher"]}',
          platform='#{opts["platform"]}',
          genre='#{opts["genre"]}',
          region='#{opts["region"]}',
          condition='#{opts["condition"]}',
          image='#{opts["image"]}',
          rarity='#{opts["rarity"]}',
          qty=#{opts["qty"]},
          worth=#{opts["worth"]},
          description='#{opts["description"]}',
          release_date='#{opts["release_date"]}'
        WHERE
          id=#{id}
        RETURNING
          id,
          title,
          developer,
          publisher,
          platform,
          genre,
          region,
          condition,
          image,
          rarity,
          qty,
          worth,
          description,
          release_date;
      SQL
    )
    return Game.new(results.first)
  end
end

class Console
  attr_reader :id, :name, :company, :condition, :image, :modded, :qty, :description, :region, :release_date

  if(ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user,uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "consoles")
  end

  def initialize(opts={})
    @id = opts["id"].to_i
    @name = opts["name"]
    @company = opts["company"]
    @condition = opts["condition"]
    @image = opts["image"]
    @modded = opts[]
    @qty = opts["qty"].to_i
    @description = opts["description"]
    @region = opts["region"]
    @release_date = opts["release_date"]
  end

  def self.all
    results = DB.exec("SELECT * FROM consoles;")
    return results.map {|result| Console.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM consoles WHERE id=#{id};")
    return Console.new(results.first)
  end

  def self.create(opts={})
    results = DB.exec(
      <<-SQL
        INSERT INTO
          consoles (
            name,
            company,
            condition,
            image,
            modded,
            qty,
            description,
            region,
            release_date
          )
        VALUES (
          '#{opts["name"]}',
          '#{opts["company"]}',
          '{opts["condition"]}',
          '{opts["image"]}',
          {opts["modded"]},
          {opts["qty"]},
          '{opts["description"]}',
          '{opts["region"]}',
          '{opts[release_date]}'
        )
        RETURNING
          id,
          name,
          company,
          condition,
          image,
          modded,
          qty,
          description,
          region,
          release_date;
      SQL
    )
    return Console.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM consoles WHERE id=#{id}")
    return { delete:true }
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE
          consoles
        SET
          name='#{opts["name"]}',
          company='#{opts["company"]}',
          condition='{opts["condition"]}',
          image='{opts["image"]}',
          modded={opts["modded"]},
          qty={opts["qty"]},
          description='{opts["description"]}',
          region='{opts["region"]}',
          release_date='{opts[release_date]}'
        WHERE
          id=#{id}
        RETURNING
          id,
          name,
          company,
          condition,
          image,
          modded,
          qty,
          description,
          region,
          release_date;
      SQL
    )
    return Console.new(results.first)
  end
end

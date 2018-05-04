class User
  attr_reader :id, :username, :password, :console_id, :game_id

  if(ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user,uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "retro_keeper")
  end

  def initialize(opts = {})
    @id = opts['id'].to_i
    @username = opts['username']
    @password = opts['password']
    @console_id = opts['console_id']
    @game_id = opts['game_id']
  end

  def self.all
    results = DB.exec("SELECT * FROM users;")
    return results.map {|result| User.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM users WHERE id=#{id};")
    return User.new(results.first)
  end

  def self.create(opts={})
    results = DB.exec(
      <<-SQL
      INSERT INTO users (username, password, console_id, game_id)
      VALUES ('#{opts["username"]}', '#{opts["password"]}', #{opts["console_id"]}, #{opts["game_id"]})
      RETURNING id, username, password, console_id, game_id;
      SQL
    )
    return User.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM users WHERE id=#{id};")
    return { deleted: true }
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE users
        SET username='#{opts["username"]}', password='#{opts["password"]}', console_id=#{"console_id"}, game_id=#{"game_id"}
        WHERE id=#{id}
        RETURNING id, username, password, console_id, game_id;
      SQL
    )
    return User.new(results.first)
  end  
end

class ConsolesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Console.all
    end

    def show
        render json: Console.find(params["id"])
    end

    def create
        render json: Console.create(params["console"])
    end

    def delete
        render json: Console.delete(params["id"])
    end

    def update
        render json: Console.update(params["id"], params["console"])
    end
end

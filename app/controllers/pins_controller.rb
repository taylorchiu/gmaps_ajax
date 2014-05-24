class PinsController < ApplicationController
	def index
		@pins = Pin.all
		respond_to do |format|
			format.html
			format.json { render :json => {:pin => @pins.as_json(except: [:id, :created_at, :updated_at])}}
		end
	end

	def create
		@pin = Pin.new pin_params
		if @pin.save
			respond_to do |format|
				format.json { render :json => {:pin => @pin.as_json(except: [:id, :created_at, :updated_at])}}
			end
		else
			flash[:errors] = @pin.errors.full_messages
		end
	end
private

	def pin_params
		params.require(:pin).permit(:lat, :long)
	end 

end

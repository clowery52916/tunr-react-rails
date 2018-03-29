class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :photo_url
      t.string :nationality

      t.timestamps
    end
  end
end

# //rails g model Artist name photo_url nationality was entered in command 

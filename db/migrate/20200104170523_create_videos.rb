class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.float :duration
      t.string :genre
      t.text :description
      t.text :trailer
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end

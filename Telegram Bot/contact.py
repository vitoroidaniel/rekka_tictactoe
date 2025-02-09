from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
from datetime import datetime

# Your Telegram Bot Token (replace with your token)
TOKEN = "6461272626:AAFpYUHsfYOhXNlSHtAszmG6qGGnYxQvLn8"

# Function to handle the /start command
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Get the user's details
    user = update.message.from_user
    username = user.username
    user_id = user.id
    
    # Get the current timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Log the contact details to a text file
    log_file = "contacted_users_log.txt"  # Name of the log file
    with open(log_file, "a") as f:
        log_entry = f"Contacted: {username}\nUser ID: {user_id}\nTimestamp: {timestamp}\n\n"
        f.write(log_entry)

    # Send a welcome message to the user
    await update.message.reply_text(f"Hello {username}, welcome to the meme bot!")

# Set up the Application (new in v20)
application = Application.builder().token(TOKEN).build()

# Register the /start command handler
application.add_handler(CommandHandler("start", start))

# Start polling for updates (this is how the bot listens for messages)
application.run_polling()


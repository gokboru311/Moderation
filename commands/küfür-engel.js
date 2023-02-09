const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "küfür-engel",
  description: "Küfür Engel Sistemini Açıp Kapatırsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setDescription("✅ **Sistem Kapatıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlemicek.")
    const embed2 = new EmbedBuilder()
    .setColor("Red")
   .setDescription("✅ **Sistem Açıldı** \n Küfür Edildiğinde Bot Artık Onları Sansürlicek.")
 
 let küfür = db.fetch(`kufurengel_${interaction.guild.id}`);
 
 if (küfür)  {
 
     db.delete(`kufurengel_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!küfür)  {
 
     db.set(`kufurengel_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};

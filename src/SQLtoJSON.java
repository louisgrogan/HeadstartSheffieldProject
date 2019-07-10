import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.*;
import java.io.*;
import java.util.*;

public class SQLtoJSON {

	public class SQLConnector {
		private Connection con;
		private Statement st;
		private ResultSet rs;

		public SQLConnector() {

			try {
				Class.forName("com.mysql.jdbc.Driver");
				con = DriverManager.getConnection("jdbc:mysql://localhost:3306/", "root", "");
				st = con.createStatement();
			}

			catch (Exception ex) {
				System.out.println("Error:" + ex);
			}
		}

		public static String rankChoices(String JSON) {

		}
	}
}
